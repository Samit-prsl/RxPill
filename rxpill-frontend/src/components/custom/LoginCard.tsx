import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function LoginCard(props: any){
    return (
        <Card className={`max-w-sm overflow-hidden ${props.className ?? ""}`}>
  <CardHeader className="flex flex-row items-start justify-between gap-4">
    {/* Left content */}
    <div className="flex flex-col space-y-1">
      <CardTitle>{props.title}</CardTitle>
      <CardDescription>{props.desc}</CardDescription>
    </div>

    {/* Right image */}
    {props.headerimg && (
      <img
        src={props.headerimg}
        alt="card image"
        className="h-25 w-25 object-contain"
      />
    )}
  </CardHeader>

  <CardFooter>
    {props.footerimg && (
      <img className="h-25 w-25 object-contain" src={props.footerimg} alt="footer image" />
    )}
  </CardFooter>
</Card>

    )
}