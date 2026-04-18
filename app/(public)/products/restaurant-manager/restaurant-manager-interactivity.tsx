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
      // ---- Smooth scroll for hash anchors ----
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

      // ---- Fade-up scroll animations ----
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

      // ---- Story block scroll reveal ----
      const storyBlocks = Array.from(
        root.querySelectorAll<HTMLElement>("[data-story-reveal]"),
      );

      let storyObserver: IntersectionObserver | undefined;
      if (typeof IntersectionObserver !== "undefined") {
        storyObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              }
            });
          },
          { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
        );

        storyBlocks.forEach((block) => {
          storyObserver?.observe(block);
        });
      } else {
        storyBlocks.forEach((block) => {
          block.classList.add("visible");
        });
      }

      // ---- Video autoplay on scroll ----
      const videos = Array.from(
        root.querySelectorAll<HTMLVideoElement>("[data-story-video]"),
      );
      const playButtons = Array.from(
        root.querySelectorAll<HTMLButtonElement>("[data-video-play]"),
      );

      let videoObserver: IntersectionObserver | undefined;
      if (typeof IntersectionObserver !== "undefined") {
        videoObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const video = entry.target as HTMLVideoElement;
              if (entry.isIntersecting) {
                // Only autoplay if we have a valid source
                if (video.readyState >= 1 || video.src) {
                  video.play().catch(() => {
                    // Autoplay blocked — show play button
                  });
                }
              } else {
                video.pause();
              }
            });
          },
          { threshold: 0.4 },
        );

        videos.forEach((video) => {
          videoObserver?.observe(video);

          // Hide placeholder once video can play
          video.addEventListener("canplay", () => {
            const placeholder =
              video.parentElement?.querySelector<HTMLElement>(
                ".video-placeholder",
              );
            if (placeholder) {
              placeholder.style.display = "none";
            }
          });
        });
      }

      // Play button click handlers
      playButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const container = btn.closest(".phone-frame-inner");
          const video = container?.querySelector<HTMLVideoElement>("video");
          if (video) {
            video
              .play()
              .then(() => {
                btn.classList.add("hidden");
                const placeholder =
                  container?.querySelector<HTMLElement>(".video-placeholder");
                if (placeholder) {
                  placeholder.style.display = "none";
                }
              })
              .catch(() => {
                // Play failed
              });
          }
        });
      });

      // ---- Screenshot carousel logic ----
      const carousels = Array.from(
        root.querySelectorAll<HTMLElement>("[data-carousel]"),
      );
      const carouselIntervals: number[] = [];

      carousels.forEach((carousel) => {
        const carouselId = carousel.dataset.carousel;
        if (!carouselId) return;

        const slidesContainer =
          carousel.querySelector<HTMLElement>(".carousel-slides");
        if (!slidesContainer) return;

        const slides = Array.from(
          slidesContainer.querySelectorAll<HTMLImageElement>(":scope > img"),
        );
        if (slides.length === 0) return; // No real screenshots yet

        const dotsContainer = root.querySelector<HTMLElement>(
          `[data-carousel-dots="${carouselId}"]`,
        );
        const labelEl = root.querySelector<HTMLElement>(
          `[data-carousel-label="${carouselId}"]`,
        );

        // Hide placeholder if there are real slides
        const placeholder =
          slidesContainer.querySelector<HTMLElement>(".screenshot-placeholder");
        if (placeholder && slides.length > 0) {
          placeholder.style.display = "none";
        }

        let currentIndex = 0;

        // Create dots
        if (dotsContainer) {
          slides.forEach((_, i) => {
            const dot = document.createElement("button");
            dot.className = `carousel-dot${i === 0 ? " active" : ""}`;
            dot.setAttribute("aria-label", `Slide ${i + 1}`);
            dot.addEventListener("click", () => goToSlide(i));
            dotsContainer.appendChild(dot);
          });
        }

        // Set first slide active
        slides[0]?.classList.add("active");

        function updateLabel() {
          if (labelEl && slides[currentIndex]) {
            const alt = slides[currentIndex].alt || `Screen ${currentIndex + 1}`;
            labelEl.textContent = `${currentIndex + 1} / ${slides.length} — ${alt}`;
          }
        }
        updateLabel();

        function goToSlide(index: number) {
          slides[currentIndex]?.classList.remove("active");
          dotsContainer
            ?.querySelectorAll(".carousel-dot")
            [currentIndex]?.classList.remove("active");

          currentIndex = index;

          slides[currentIndex]?.classList.add("active");
          dotsContainer
            ?.querySelectorAll(".carousel-dot")
            [currentIndex]?.classList.add("active");

          updateLabel();
        }

        // Arrow buttons
        const prevBtn =
          carousel.querySelector<HTMLButtonElement>("[data-carousel-prev]");
        const nextBtn =
          carousel.querySelector<HTMLButtonElement>("[data-carousel-next]");

        prevBtn?.addEventListener("click", () => {
          goToSlide((currentIndex - 1 + slides.length) % slides.length);
        });
        nextBtn?.addEventListener("click", () => {
          goToSlide((currentIndex + 1) % slides.length);
        });

        // Auto-rotate
        const interval = window.setInterval(() => {
          goToSlide((currentIndex + 1) % slides.length);
        }, 4000);
        carouselIntervals.push(interval);

        // Pause on hover
        carousel.addEventListener("mouseenter", () => {
          window.clearInterval(interval);
        });
      });

      // ---- CTA Form ----
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

      // ---- Counter animations ----
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

      // ---- Cleanup ----
      cleanup = () => {
        hashAnchors.forEach((anchor) => {
          anchor.removeEventListener("click", onHashAnchorClick);
        });
        observer?.disconnect();
        storyObserver?.disconnect();
        videoObserver?.disconnect();

        carouselIntervals.forEach((id) => window.clearInterval(id));

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
