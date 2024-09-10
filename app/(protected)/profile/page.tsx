import ProfileBody from "@/components/Shared/Profile/ProfileBody";
import { getUser } from "@/constants/actions/user.action";

export default async function ProfilePage() {
  const result = await getUser();

  console.log(result);
  return (
    <section className="w-full">
      <ProfileBody user={result} />
    </section>
  );
}
