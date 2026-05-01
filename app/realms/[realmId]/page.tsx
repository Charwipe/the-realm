import { notFound } from "next/navigation";
import Link from "next/link";
import { getRealmById, realms } from "@/lib/realms";
import { RealmIntroContent } from "@/components/realm-intro-content";

interface RealmPageProps {
  params: Promise<{ realmId: string }>;
}

export async function generateStaticParams() {
  return realms.map((realm) => ({
    realmId: realm.id,
  }));
}

export async function generateMetadata(props: RealmPageProps) {
  const params = await props.params;
  const realm = getRealmById(params.realmId);
  if (!realm) return { title: "Realm Not Found" };
  
  return {
    title: `${realm.name} | REALM`,
    description: realm.description,
  };
}

export default async function RealmPage(props: RealmPageProps) {
  const params = await props.params;
  const realm = getRealmById(params.realmId);

  if (!realm) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Back navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm text-sm text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Return to Map
        </Link>
      </div>

      <RealmIntroContent realm={realm} />
    </main>
  );
}
