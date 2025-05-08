export const ContactButton = () => {
  return (
    <div className=" h-[70px] pr-8 w-full md:flex hidden items-center bg-linear-to-bl from-zinc-400 from-20% to-white to-40%">
      <a
        href="https://api.whatsapp.com/send?phone=5508002020002"
        rel="noopener noreferrer"
        target="_blank"
        className="bg-black text-white px-4 py-2 block w-[180px] text-center rounded-full"
      >
        Área do cliente
      </a>
    </div>
  )
}
