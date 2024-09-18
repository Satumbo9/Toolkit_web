import EquipmentHome from "@/components/home/EquipmentHome";
import FinanceHome from "@/components/home/FinanceHome";
import GeneralHome from "@/components/home/GeneralHome";
import SupportHome from "@/components/home/SupportHome";
import { getUser } from "@/constants/actions/user.action";

export default async function Home() {
  const result = await getUser();
  return (
    <section>
      {result?.Department?.title === "General" ||
        (result?.Department?.title === "IT" && <GeneralHome />)}
      {result?.Department?.title === "Support" && <SupportHome />}
      {result?.Department?.title === "Equipment" && <EquipmentHome />}
      {result?.Department?.title === "Finance" && <FinanceHome />}
    </section>
  );
}
