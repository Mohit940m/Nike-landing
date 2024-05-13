import { star } from "../assets/icons"


const PopularProdructCard = ({ imgURL, name, price }) => {
  return (
    <div className=" flex flex-22 flex-col w-full max-sm:w-full ">
        <img src={imgURL} alt={name}
        className=" w-[280px] h-[280px] cursor-pointer"
        />
      <div className="flex justify-start mt-8 gap-2.5">
        <img src={star} alt="rating"
        width={24} height={24} />
        <p className=" font-montserrat text-xl leading-normal text-slate-gray ">(4.5)</p>
      </div>
      <h3 className="mt-2 test-2xl leading-normal font-semibold font-palanquin ">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat leading-normal text-coral-red ">{price}</p>
    </div>
  )
}

export default PopularProdructCard
