import type { NextPage } from 'next'
import SafeEnviroment from 'ui/components/feedback/SafeEnviroment/SafeEnviroment'
import { PageTitle } from 'ui/components/data-display/PageTitle/PageTitle'

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />
    </div>
  )
}

export default Home
