import { Scan, Zap } from 'lucide-react'
import Image from 'next/image'

type TypeFeatureProps = 'energy' | 'space' | 'size'

interface FeatureCardProps {
  feature: string
  type: TypeFeatureProps
}

export function FeatureCard({ type, feature }: FeatureCardProps) {
  return (
    <>
      <div className="w-full flex flex-col gap-4 p-6 border-[#E7EBF0] border-2 rounded-3xl">
        <div className="flex items-center gap-2">
          {type === 'energy' && (
            <>
              <Zap size={18} className="" />
              <Zap size={18} className="" />
              <Zap size={18} className="" />
              <Zap size={18} className="" />
              <Zap size={18} className="opacity-10" />
            </>
          )}

          {type === 'space' && <Scan size={18} className="" />}

          {type === 'size' && (
            <>
              <Image src="/full-dot.svg" alt="" width={12} height={12} />
              <Image src="/transparent-dot.svg" alt="" width={12} height={12} />
              <Image src="/transparent-dot.svg" alt="" width={12} height={12} />
            </>
          )}
        </div>
        <h4 className="leading-tight text-nowrap text-blue-bold font-semibold text-lg">
          {feature}
        </h4>
      </div>
    </>
  )
}
