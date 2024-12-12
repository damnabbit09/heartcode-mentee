'use client'

import { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"


const quizSchema = z.object({
    q1: z.enum(["a", "b", "c", "d"], {
        required_error: "You need to select an answer.",
    }),
    q2: z.enum(["a", "b", "c", "d"], {
        required_error: "You need to select an answer.",
    }),
    q3: z.enum(["a", "b", "c", "d"], {
        required_error: "You need to select an answer.",
    }),
})

const questions = [
    {
        id: 'q1',
        question: 'What is a side effect of consuming heroin?',
        options: [
            { value: 'a', label: 'Pancreatic Cancer' },
            { value: 'b', label: 'Insomnia' },
            { value: 'c', label: 'Intense Hunger' },
            { value: 'd', label: 'Diarrhea' },
        ],
    },
    {
        id: 'q2',
        question: 'Which of the below are not a way to refer to cocaine?',
        options: [
            { value: 'a', label: 'Blow' },
            { value: 'b', label: 'Ice' },
            { value: 'c', label: 'Bump' },
            { value: 'd', label: 'Nose Candy' },
        ],
    },
    {
        id: 'q3',
        question: 'What should you do if you catch your classmates doing drugs?',
        options: [
            { value: 'a', label: 'Join them' },
            { value: 'b', label: 'Confront and pressure them into stopping' },
            { value: 'c', label: 'Report the incident to the school' },
            { value: 'd', label: 'Quickly hide it for your later use' },
        ],
    },
]

export default function Quiz() {
    const [score, setScore] = useState<number | null>(null)

    const form = useForm<z.infer<typeof quizSchema>>({
        resolver: zodResolver(quizSchema),
    })

    function onSubmit(values: z.infer<typeof quizSchema>) {
        const correctAnswers = { q1: 'b', q2: 'b', q3: 'c' }
        const userScore = Object.keys(values).reduce((acc, key) => {
            return acc + (values[key as keyof typeof values] === correctAnswers[key as keyof typeof correctAnswers] ? 1 : 0)
        }, 0)
        setScore(userScore)
    }

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Q&A</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {questions.map((q) => (
                            <FormField
                                key={q.id}
                                control={form.control}
                                name={q.id as keyof z.infer<typeof quizSchema>}
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel>{q.question}</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex flex-col space-y-1"
                                            >
                                                {q.options.map((option) => (
                                                    <FormItem className="flex items-center space-x-3 space-y-0" key={option.value}>
                                                        <FormControl>
                                                            <RadioGroupItem value={option.value} />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            {option.label}
                                                        </FormLabel>
                                                    </FormItem>
                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))}
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                {score !== null && (
                    <p className="text-lg font-semibold">Your score: {score} out of {questions.length}</p>
                )}
            </CardFooter>
        </Card>
    )
}

