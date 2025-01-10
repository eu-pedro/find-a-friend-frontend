import { Page, Banner } from '@/components'
import { Form } from './form'

export function RegisterSection() {
  return (
    <Page>
      <section className="h-[661px] flex gap-32">
        <Banner.Section />

        <div className="flex flex-col">
          <h1 className="text-blue-bold font-bold text-5xl text-left pt-20">
            Faça seu cadastro
          </h1>

          <Form />
        </div>
      </section>
    </Page>
  )
}
