import { HeartIcon } from "../../assets/icons";
import { Button } from "../../components";
import ProductItem from "../../components/product-item";
import { useQuery } from "../../hooks";
import { useGetProductByCodeQuery } from "../../stores/services/master-data-api";
import AddToCart from "./addToCart";
import ProductSlider from "./productSlider";

const ProductContainer = () => {

  const query = useQuery();
  const productCode: any = ("" + query.get("code"));

  const {
    data,
    isLoading
  } = useGetProductByCodeQuery(productCode);

  if (isLoading || data == null) { return <p>loading...</p> }

  const { product, relatedProducts } = data;

  return (
    <div className="mx-auto my-16 max-w-[1400px] lg:my-28">



      <div className="grid gap-x-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div>
            <ProductSlider childsFilesUrl={product.childsFilesUrl} />
          </div>
        </div>
        <div className="lg:col-span-1"></div>
        <div className="mt-10 lg:col-span-4 lg:mt-0">
          <p className="mb-6 text-lg font-medium text-textColor">
            home / shop / Sovereign spirit t-shirt
          </p>
          <h1 className="text-3xl font-bold lg:text-4xl">
            {product.name}
          </h1>
          <p className="my-4 text-2xl font-semibold">{product.price || "10.000 vnđ"}</p>
          <p className="my-8 text-lg font-medium text-textColor">
            {/* {product.descriptions} */}
            Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur. Lorem ipsum dolor.

            Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt labore et dolore magna aliquyam.erat, sed diam voluptua. At vero accusam et justo duo dolores et ea rebum.
          </p>
          <div>
            <div className="my-8 flex h-[46px] items-stretch gap-x-3 lg:w-[80%]">
              <input
                className="w-[20%] rounded-xl border border-slate-600 bg-transparent px-3 text-slate-600 outline-none"
                type="number"
                name=""
                id=""
                value={1}
              />
              <AddToCart product={product} />
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
      <div className="mt-40 px-6">
        <h1 className="text-4xl font-bold">Sản phẩm liên quan</h1>
        <ul className="mt-8 grid grid-cols-1 gap-x-8 lg:grid-cols-5">
          {relatedProducts && relatedProducts.map((item: any) => (
            <ProductItem product={item} key={item.code} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductContainer;
