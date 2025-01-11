'use client'

import { Page } from '@/components/page/page'
import { Form } from './Form'
import { Banner } from '@/components'

export function SinginSection() {
  return (
    <Page>
      <section className="h-[661px] flex gap-32">
        <Banner.Section />

        <div className="flex flex-col">
          <h1 className="text-blue-bold font-bold text-5xl text-left pt-20">
            Boas-vindas!
          </h1>

          <Form.Singin />
        </div>
      </section>
    </Page>
  )
}
