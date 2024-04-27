import { CartShoppingIcon, HeartIcon } from "../../assets/icons";
import ProductItem from "../../components/product-item";
import Slider from "./slider";

const ProductContainer = () => {
  return (
    <div className="mx-auto my-16 max-w-[1290px] lg:my-28">
      <div className="grid gap-x-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div>
            <Slider />
          </div>
        </div>
        <div className="mt-10 lg:col-span-5 lg:mt-0">
          <h1 className="text-3xl font-bold lg:text-4xl">
            Sovereign spirit t-shirt
          </h1>
          <p className="my-4 text-2xl font-semibold">$19.00 – $25.00</p>
          <p className="my-8 text-lg font-medium text-slate-300">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit
            aut fugit, sed quia consequuntur. Lorem ipsum dolor.
          </p>
          <p className="my-8 text-lg font-medium text-slate-300">
            Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt labore
            et dolore magna aliquyam.erat, sed diam voluptua. At vero accusam et
            justo duo dolores et ea rebum.
          </p>
          <div>
            <h4 className="mb-2 text-xl font-semibold">Size</h4>
            <ul className="flex gap-x-4">
              <li className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-[#12082d] text-xs font-bold text-slate-400">
                L
              </li>
              <li className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-[#12082d] text-xs font-bold text-slate-400">
                M
              </li>
              <li className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-[#12082d] text-xs font-bold text-slate-400">
                M
              </li>
            </ul>
          </div>
          <div>
            <div className="my-8 flex h-[46px] items-stretch gap-x-3 lg:w-[80%]">
              <input
                className="w-[20%] rounded-xl border border-slate-600 bg-transparent px-3 text-slate-600 outline-none"
                type="number"
                name=""
                id=""
                value={1}
              />
              <button className="flex grow items-center justify-center gap-x-2 rounded-xl bg-[#1745a5] font-bold text-white hover:bg-blue-700">
                <CartShoppingIcon className="h-4 w-4" />
                Buy now
              </button>
              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-[#ff61fb]">
                <HeartIcon className="h-5 w-5" />
              </span>
            </div>
          </div>
          <div className="flex items-baseline gap-x-2">
            <h4 className="mb-2 text-xl font-semibold">SKU:</h4>
            <p className="font-medium">001</p>
          </div>
          <div className="flex items-baseline gap-x-2">
            <h4 className="mb-2 text-xl font-semibold">SKU:</h4>
            <p className="font-medium">001</p>
          </div>
          <div className="flex items-baseline gap-x-2">
            <h4 className="mb-2 text-xl font-semibold">SKU:</h4>
            <p className="font-medium">001</p>
          </div>
          <div className="flex items-baseline gap-x-2">
            <h4 className="mb-2 text-xl font-semibold">SKU:</h4>
            <p className="font-medium">001</p>
          </div>
        </div>
      </div>
      {/* <div className="mt-20">
        <div>
          <ul className="flex items-center gap-x-1">
            {[1, 2, 3].map(() => (
              <li className="flex h-[60px] w-[280px] items-center justify-center bg-[#12082d] text-[16px] uppercase">
                desc
              </li>
            ))}
          </ul>
          <ul>
            [1,2,3].map()
          </ul>
        </div>
      </div> */}
      <div className="mt-20 px-6">
        <h1 className="text-4xl font-bold">Sản phẩm liên quan</h1>
        <ul className="mt-8 grid grid-cols-1 gap-x-8 lg:grid-cols-3">
          {[1, 2, 3].map(() => (
            <ProductItem />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductContainer;
