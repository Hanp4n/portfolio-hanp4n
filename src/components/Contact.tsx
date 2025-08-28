import { Input } from './ui/input';
import { Button } from './ui/button';
import { Send } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import emailjs from "@emailjs/browser"

//Contact must be a form component

const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email(),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
})
const requiredSchema = formSchema.required();

const blankForm = {
    name: "",
    email: "",
    subject: "",
    message: ""
}

export default function Contact() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof requiredSchema>>({
        resolver: zodResolver(requiredSchema),
        defaultValues: blankForm
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof requiredSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)

        try {
            await emailjs.send(
                "service_tlnpkrn",     
                "template_4v7qfss",    
                {
                    name: values.name,
                    email: values.email,
                    message: values.message,
                    subject: values.subject,
                },
                "mSjNOMT5W1QpoN8I7"      
            )
            alert("Mensaje enviado con éxito ✉️")
            form.reset();
        } catch (error) {
            console.error(error)
            alert("Error al enviar el mensaje")
        }

    }
    return (
        <div className='scroll-mt-20' id="contact">
            <h1 className="text-2xl font-bold mb-4
            sm:text-left text-center">Contact</h1>
            <Form {...form}>
                <form className='border-1 border-gray-300
                dark:border-gray-800
                p-6 rounded-xl'
                    onSubmit={form.handleSubmit(onSubmit)}>
                    <p className='mb-6 font-bold'>Send Message</p>
                    <div id="contact-fields">
                        <div className='text-sm font-light
                        flex flex-col gap-2'>
                            <div id="name-email-col" className='flex gap-6 mb-4'>
                                <div className="flex flex-col grow-1">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='font-light'>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your name" className='bg-gray-100 border-0' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col grow-1">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='font-light'>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your email@example.com" className='bg-gray-100 border-0' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <div className="flex flex-col">
                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='font-light'>Subject</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Let's collaborate on..." className='bg-gray-100 border-0' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='font-light'>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Your message" className='border-gray-300 rounded-md p-2 resize-none h-32 bg-gray-100 border-0' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex justify-end mt-4">
                                    <Button type='submit' className='mt-2 grow-1'><Send />Send Message</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
}