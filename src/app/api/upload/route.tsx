import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const file = formData.get("file") as File | null;

    if (!name || !email || !file) {
      return NextResponse.json(
        { message: "Мэдээлэл дутуу байна." },
        { status: 400 },
      );
    }

    // Upload хавтас
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });

    // Файл хадгалах
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
    await writeFile(path.join(uploadDir, filename), buffer);

    // TODO: энд DB-д хадгалах, имэйл илгээх г.м. хийх боломжтой
    console.log("New application:", { name, email, filename });

    return NextResponse.json({ message: "Файл амжилттай хүлээн авлаа." });
  } catch (err: any) {
    console.error("Upload error:", err);
    return NextResponse.json({ message: "Серверийн алдаа." }, { status: 500 });
  }
}
