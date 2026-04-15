"use client";

import { useEffect } from "react";

function getOrCreateStatusElement(ctaForm: HTMLElement): HTMLParagraphElement {
  const existingStatus =
    ctaForm.querySelector<HTMLParagraphElement>("[data-cta-status]");
  if (existingStatus) {
    return existingStatus;
  }

  const statusElement = document.createElement("p");
  statusElement.setAttribute("data-cta-status", "true");
  statusElement.style.display = "none";
  statusElement.style.marginTop = "14px";
  statusElement.style.fontSize = "12px";
  statusElement.style.textAlign = "center";
  statusElement.style.fontFamily = "var(--resmg-font-mono), monospace";

  ctaForm.appendChild(statusElement);
  return statusElement;
}

export function RestaurantManagerInteractivity() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-resmg-root]");
    if (!root) {
      return;
    }

    const idleWindow = window as Window & {
      requestIdleCallback?: (
        callback: () => void,
        options?: { timeout?: number },
      ) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    let cleanup: (() => void) | undefined;
    let cancelPendingInit: (() => void) | undefined;

    const initialize = () => {
      const hashAnchors = Array.from(
        root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'),
      );

      const onHashAnchorClick = (event: Event) => {
        const anchor = event.currentTarget as HTMLAnchorElement;
        const href = anchor.getAttribute("href");
        if (!href || href === "#") {
          return;
        }

        const target = root.querySelector<HTMLElement>(href);
        if (!target) {
          return;
        }

        event.preventDefault();
        const targetY =
          target.getBoundingClientRect().top + window.scrollY - 92;

        window.scrollTo({
          top: Math.max(0, targetY),
          behavior: "smooth",
        });
      };

      hashAnchors.forEach((anchor) => {
        anchor.addEventListener("click", onHashAnchorClick);
      });

      const fadeElements = Array.from(
        root.querySelectorAll<HTMLElement>(".fade-up"),
      );

      let observer: IntersectionObserver | undefined;
      if (typeof IntersectionObserver !== "undefined") {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              }
            });
          },
          { threshold: 0.1 },
        );

        fadeElements.forEach((element) => {
          observer?.observe(element);
        });
      } else {
        fadeElements.forEach((element) => {
          element.classList.add("visible");
        });
      }

      const roleTabs = Array.from(
        root.querySelectorAll<HTMLButtonElement>("[data-role-switch]"),
      );
      const rolePanels = Array.from(
        root.querySelectorAll<HTMLElement>(".role-panel"),
      );

      const onRoleTabClick = (event: Event) => {
        const target = event.currentTarget as HTMLButtonElement;
        const role = target.dataset.roleSwitch;
        if (!role) {
          return;
        }

        roleTabs.forEach((tab) => {
          tab.classList.remove("active");
        });
        rolePanels.forEach((panel) => {
          panel.classList.remove("active");
        });

        target.classList.add("active");
        root
          .querySelector<HTMLElement>(`#panel-${role}`)
          ?.classList.add("active");
      };

      roleTabs.forEach((tab) => {
        tab.addEventListener("click", onRoleTabClick);
      });

      const ctaForm = root.querySelector<HTMLElement>("[data-cta-form]");
      const submitButton =
        ctaForm?.querySelector<HTMLButtonElement>(".form-submit");

      let onSubmitClick: ((event: Event) => Promise<void>) | undefined;
      let onInputEnter: ((event: Event) => void) | undefined;

      if (ctaForm && submitButton) {
        const statusElement = getOrCreateStatusElement(ctaForm);

        const setSubmittingState = (isSubmitting: boolean) => {
          submitButton.disabled = isSubmitting;
          submitButton.textContent = isSubmitting
            ? "Submitting..."
            : "Book My Demo →";
          submitButton.style.opacity = isSubmitting ? "0.75" : "1";
        };

        const setStatusMessage = (
          message: string,
          type: "success" | "error",
        ) => {
          statusElement.textContent = message;
          statusElement.style.display = "block";
          statusElement.style.color =
            type === "success" ? "var(--green)" : "var(--red)";
        };

        onSubmitClick = async (event: Event) => {
          event.preventDefault();

          const nameInput =
            ctaForm.querySelector<HTMLInputElement>('input[name="name"]');
          const phoneInput = ctaForm.querySelector<HTMLInputElement>(
            'input[name="phone"]',
          );
          const emailInput = ctaForm.querySelector<HTMLInputElement>(
            'input[name="email"]',
          );
          const companyInput = ctaForm.querySelector<HTMLInputElement>(
            'input[name="company"]',
          );
          const interestSelect = ctaForm.querySelector<HTMLSelectElement>(
            'select[name="interest"]',
          );

          if (
            !nameInput ||
            !phoneInput ||
            !emailInput ||
            !companyInput ||
            !interestSelect
          ) {
            setStatusMessage(
              "Form configuration is incomplete. Please contact support.",
              "error",
            );
            return;
          }

          const payload = {
            name: nameInput.value.trim(),
            phone: phoneInput.value.trim(),
            email: emailInput.value.trim(),
            company: companyInput.value.trim(),
            interest: interestSelect.value.trim(),
            source: "Restaurant Manager Landing",
          };

          if (
            !payload.name ||
            !payload.phone ||
            !payload.email ||
            !payload.company ||
            !payload.interest
          ) {
            setStatusMessage(
              "Please fill in all required fields before submitting.",
              "error",
            );
            return;
          }

          setSubmittingState(true);
          statusElement.style.display = "none";

          try {
            const response = await fetch("/api/leads/public", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            });

            const result = (await response.json().catch(() => null)) as {
              success?: boolean;
              error?: string;
              message?: string;
            } | null;

            if (response.ok && result?.success) {
              setStatusMessage(
                result.message ||
                  "Thanks, your demo request has been received. We will contact you shortly.",
                "success",
              );

              nameInput.value = "";
              phoneInput.value = "";
              emailInput.value = "";
              companyInput.value = "";
              interestSelect.selectedIndex = 1;
            } else {
              setStatusMessage(
                result?.error ||
                  "We could not submit your request right now. Please try again.",
                "error",
              );
            }
          } catch {
            setStatusMessage(
              "Network issue detected. Please try again in a moment.",
              "error",
            );
          } finally {
            setSubmittingState(false);
          }
        };

        onInputEnter = (event: Event) => {
          const keyboardEvent = event as KeyboardEvent;
          if (keyboardEvent.key !== "Enter") {
            return;
          }

          keyboardEvent.preventDefault();
          submitButton.click();
        };

        submitButton.addEventListener("click", onSubmitClick);

        ctaForm
          .querySelectorAll<HTMLInputElement>("input")
          .forEach((inputElement) => {
            inputElement.addEventListener("keydown", onInputEnter!);
          });
      }

      const counters = Array.from(
        root.querySelectorAll<HTMLElement>(".metric-num, .hero-stat-num"),
      );

      counters.forEach((counter) => {
        counter.style.opacity = "0";
        counter.style.transform = "translateY(10px)";
      });

      const counterAnimationTimeout = window.setTimeout(() => {
        counters.forEach((counter) => {
          counter.style.transition = "opacity 0.5s, transform 0.5s";
          counter.style.opacity = "1";
          counter.style.transform = "translateY(0)";
        });
      }, 300);

      cleanup = () => {
        hashAnchors.forEach((anchor) => {
          anchor.removeEventListener("click", onHashAnchorClick);
        });
        observer?.disconnect();
        roleTabs.forEach((tab) => {
          tab.removeEventListener("click", onRoleTabClick);
        });

        if (ctaForm && submitButton && onSubmitClick) {
          submitButton.removeEventListener("click", onSubmitClick);
        }

        if (ctaForm && onInputEnter) {
          ctaForm
            .querySelectorAll<HTMLInputElement>("input")
            .forEach((inputElement) => {
              inputElement.removeEventListener("keydown", onInputEnter!);
            });
        }

        window.clearTimeout(counterAnimationTimeout);
      };
    };

    if (idleWindow.requestIdleCallback && idleWindow.cancelIdleCallback) {
      const idleId = idleWindow.requestIdleCallback(
        () => {
          initialize();
        },
        { timeout: 180 },
      );

      cancelPendingInit = () => {
        idleWindow.cancelIdleCallback?.(idleId);
      };
    } else {
      const timeoutId = window.setTimeout(() => {
        initialize();
      }, 0);

      cancelPendingInit = () => {
        window.clearTimeout(timeoutId);
      };
    }

    return () => {
      cancelPendingInit?.();
      cleanup?.();
    };
  }, []);

  return null;
}
