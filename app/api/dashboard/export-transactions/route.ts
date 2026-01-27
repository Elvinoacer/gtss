
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const session = await auth();

  if (!session || !session.user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const transactions = await prisma.transaction.findMany({
      include: {
        customer: true,
      },
      orderBy: {
        date: 'desc',
      },
    });

    const csvRows = [
      ["Date", "Client", "Amount", "Status", "Product"],
    ];

    transactions.forEach((t) => {
      csvRows.push([
        t.date.toISOString().split('T')[0],
        `"${t.customer.name}"`, // Quote to handle commas
        t.amount.toString(),
        t.status,
        `"${t.product}"`,
      ]);
    });

    const csvContent = csvRows.map((row) => row.join(",")).join("\n");

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="transactions-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error("Error exporting transactions:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
