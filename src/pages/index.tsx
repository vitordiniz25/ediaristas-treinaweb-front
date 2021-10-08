import type { NextPage } from "next";
import SafeEnviroment from "ui/components/feedback/SafeEnviroment/SafeEnviroment";
import { PageTitle } from "ui/components/data-display/PageTitle/PageTitle";
import { UserInformation } from "ui/components/data-display/UserInformation/UserInformation";
import { useReducer } from "react";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <UserInformation
        name={"Vitor Diniz"}
        picture={"https://github.com/vitordiniz25.png"}
        rating={3}
        description={"Brasília"}
      />
    </div>
  );
};

export default Home;
