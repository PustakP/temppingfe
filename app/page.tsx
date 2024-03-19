import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function Page() {
  return (
    <div className='overflow-hidden'>
      <div className='flex justify-center items-center h-screen w-screen'>
        {/* <h1 className='text-[50px] sm:text-[310px]'>i wanted to drink more</h1> */}

        <Card className="w-[72%] h-[80%]">
          <CardHeader className="py-10 justify-center items-center">
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent className="px-20 py-8">
            <p>Card Content</p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
