import EquipmentHome from "@/components/home/EquipmentHome";
import FinanceHome from "@/components/home/FinanceHome";
import GeneralHome from "@/components/home/GeneralHome";
import SupportHome from "@/components/home/SupportHome";
import { getUser } from "@/constants/actions/user.action";

export default async function Home() {
  const result = await getUser();
  return (
    <section>
      {result?.department?.title === "General" ||
        (result?.department?.title === "IT" && <GeneralHome />)}
      {result?.department?.title === "Support" && <SupportHome />}
      {result?.department?.title === "Equipment" && <EquipmentHome />}
      {result?.department?.title === "Finance" && <FinanceHome />}
    </section>
  );
}
