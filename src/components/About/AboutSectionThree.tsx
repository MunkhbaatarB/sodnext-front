import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import websData from "./webCardData";

export default function App() {
  return (
    <div className="mx-auto mb-6 max-w-screen-2xl">
      <h1 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        Хийгдсэн ажилууд
      </h1>
      <div className="flex flex-wrap  justify-between gap-4">
        {websData.map((item) => (
          <Card
            key={item.id}
            isFooterBlurred
            className="w-full border-none md:w-[32%]"
            radius="lg"
          >
            <Image
              alt="img"
              className="object-cover"
              height="auto"
              src={item.image}
              width="100%"
            />
            <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
              <p className="text-sm text-white dark:text-black/90">
                {item.name}
              </p>
              <a href={item.href} target="_blank">
                <Button
                  className="bg-black/20 text-tiny text-white dark:text-black/90"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  {item.type}
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
