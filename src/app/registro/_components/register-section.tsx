import { Page, Banner, Title } from '@/components'
import { Form } from './form'

export function RegisterSection() {
  return (
    <Page>
      <section className="h-[661px] flex gap-10 laptop:gap-32">
        <Banner.Section />

        <div className="flex flex-col">
          <Title title="Faça seu Cadastro" />

          <Form />
        </div>
      </section>
    </Page>
  )
}
