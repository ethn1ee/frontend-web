"use client";

import SiteHeader from "@/components/site-header";
import { usePathname, useRouter } from "next/navigation";

const HeaderSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isMainPage = pathname.toLowerCase() === "/living";

  const handleSearch = (query: string) => {
    router.push(`/living/search?q=${encodeURIComponent(query)}`);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SiteHeader
      isMainPage={isMainPage}
      isVisible={isMainPage || pathname.includes("search")}
      title="Living"
      onSearch={handleSearch}
      onBack={handleBack}
      searchPlaceholder="Search for anything ..."
    />
  );
};

export default HeaderSection;
