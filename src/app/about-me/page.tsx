import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";


export default function AboutMe() {
    return (
        <div className="flex justify-around px-8 pt-12">
            <Card className="w-2/5 h-36 border-accent">
                <CardHeader>
                    <CardTitle>
                      hiiiiiiiii  
                    </CardTitle>
                    <CardDescription>
                        i'm eva and i'm a proud owner of 500+ books. in my free time, i love to read mystery/thriller books and exercise.
                        my tbr list continues to grow everyday.
                    </CardDescription>

                </CardHeader>
            </Card>
            <Card className="w-2/5 h-36 border-accent">
                <CardHeader>
                    <CardTitle>
                        HELLLOOOO
                    </CardTitle>
                    <CardDescription>

                        i'm damien. I like music and football, i love to listen to music during my freetime and would
                        go to play football regularly every week.
                    </CardDescription>

                </CardHeader>
            </Card>
        </div>


    )
}