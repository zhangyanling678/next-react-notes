import { useTranslation } from "@/app/i18n";
import Link from "next/link";

export default async function Page({ params }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  return (
    <div className="note--empty-state">
      <Link href="/note/edit">Go Edit Page</Link>
      <span className="note-text--empty-state">{t("initText")}</span>
    </div>
  );
}
