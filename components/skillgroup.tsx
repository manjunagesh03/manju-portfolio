import {IconType} from "react-icons"
type Skill = {
    name: string;
    icon: IconType;
}

type SkillGroupProps = {
  title: string;
  skills: Skill[];
};

export default function SkillGroup({
  title,
  skills,
}: SkillGroupProps) {
  return (
    <section className="rounded-xl border border-white/10 p-6">
      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => {
            const Icon = skill.icon;

            return(
                <span
                    key = {skill.name}
                    className = "flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-gray-300"
                >
                    <Icon className = "text-lg" />
                    {skill.name}
                </span>
            );
        })}

        
      </div>
    </section>
  );
}