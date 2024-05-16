import salad from "../assets/salad.png";
import potato from "../assets/potato.png";

const Content = () => {
  return (
    <>
      <div className="min-h-[60vh] w-full">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 p-1">
            <div class="mx-auto shadow-lg rounded-lg overflow-hidden light-orange h-full">
              <div class="md:flex h-full">
                <div class="md:flex-shrink-0">
                  <img
                    class="w-[100%] object-cover md:w-48"
                    src={salad}
                    alt="Imagen"
                  ></img>
                </div>
                <div class="flex flex-col justify-center p-4">
                  <div class="uppercase tracking-wide text-sm text-orange-500 font-semibold">
                    Lorem ipsum dolor
                  </div>
                  <p class="mt-2 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mollis nulla eget congue convallis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-1">
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col justify-center p-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <span className="text-center text-2xl text-orange-500">35</span>
                <p class="text-center mt-2 text-orange-500">
                  Lorem ipsum dolor
                </p>
              </div>
              <div class="flex flex-col justify-center p-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <span className="text-center text-2xl text-orange-500">35</span>
                <p class="text-center mt-2 text-orange-500">
                  Lorem ipsum dolor
                </p>
              </div>
              <div class="flex flex-col justify-center p-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <span className="text-center text-2xl text-orange-500">35</span>
                <p class="text-center mt-2 text-orange-500">
                  Lorem ipsum dolor
                </p>
              </div>
              <div class="flex flex-col justify-center p-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <span className="text-center text-2xl text-orange-500">35</span>
                <p class="text-center mt-2 text-orange-500">
                  Lorem ipsum dolor
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 p-1">
            <div class="mx-auto shadow-lg rounded-lg overflow-hidden light-orange">
              <div class="md:flex">
                <div class="md:flex-shrink-0">
                  <img
                    class="h-48 w-full object-cover md:w-48"
                    src={potato}
                    alt="Imagen"
                  ></img>
                </div>
                <div class="flex flex-col justify-center p-4">
                  <div class="uppercase tracking-wide text-sm text-orange-500 font-semibold">
                    Lorem ipsum dolor
                  </div>
                  <p class="mt-2 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mollis nulla eget congue convallis.
                  </p>
                  <a
                    href="#"
                    class="mt-4 block text-center bg-orange-500 text-white uppercase font-semibold rounded-lg px-4 py-2 hover:bg-yellow-400"
                  >
                    Botón
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-1">
            <div class="mx-auto shadow-lg rounded-lg overflow-hidden light-orange">
              <div class="md:flex">
                <div class="md:flex-shrink-0">
                  <img
                    class="h-48 w-full object-cover md:w-48"
                    src={potato}
                    alt="Imagen"
                  ></img>
                </div>
                <div class="flex flex-col justify-center p-4">
                  <div class="uppercase tracking-wide text-sm text-orange-500 font-semibold">
                    Lorem ipsum dolor
                  </div>
                  <p class="mt-2 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mollis nulla eget congue convallis.
                  </p>
                  <a
                    href="#"
                    class="mt-4 block text-center bg-orange-500 text-white uppercase font-semibold rounded-lg px-4 py-2 hover:bg-yellow-400"
                  >
                    Botón
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
