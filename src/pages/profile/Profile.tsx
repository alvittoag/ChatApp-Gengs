// ** Import Components
import TitlePage from "../../globals/TitlePage";
import Back from "../../components/profile/Back";
import FormProfile from "../../components/profile/FormProfile";

const Profile = () => {
  return (
    <div className="h-[100vh] py-6 px-12 ">
      <TitlePage title="Profile" />
      <Back />

      <FormProfile />
    </div>
  );
};

export default Profile;
