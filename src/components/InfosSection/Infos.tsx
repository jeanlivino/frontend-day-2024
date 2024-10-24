type InfosType = {
  title: string;
  description: string;
};

export function Infos({ title, description }: InfosType) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-primary font-kdam text-3xl">{title}</h2>
      <p className=" text-md">{description}</p>
    </div>
  );
}
