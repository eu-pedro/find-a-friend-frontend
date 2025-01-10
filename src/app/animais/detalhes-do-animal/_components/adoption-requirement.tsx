import { CircleAlert } from 'lucide-react'

interface AdoptionRequirementsProps {
  requirement: string
}

export function AdoptionRequirement({
  requirement,
}: AdoptionRequirementsProps) {
  return (
    <div className="flex items-center gap-3 w-full border-2 border-red-light  py-3 px-8 rounded-xl bg-gradient-to-r from-[#FEEFEF] to-white">
      <CircleAlert className="text-red-light" size={20} />

      <span className="text-red-light border-red-light font-semibold text-lg">
        {requirement}
      </span>
    </div>
  )
}
