import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";


export default function AboutMe() {
    return (
        <div className="flex justify-around px-8 pt-12">
            <Card className="w-2/5 h-36">
                <CardHeader>
                    <CardTitle>
                        SUPPPPPPP
                    </CardTitle>
                    <CardDescription>

                    hiii, i'm eva
                    </CardDescription>

                </CardHeader>
            </Card>
            <Card className="w-2/5 h-36">
                <CardHeader>
                    <CardTitle>
                        HELLLOOOO
                    </CardTitle>
                    <CardDescription>

                        i'm damien!
                    </CardDescription>

                </CardHeader>
            </Card>
        </div>


    )
}