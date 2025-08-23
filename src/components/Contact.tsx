import {Input} from './ui/input';
import {Button} from './ui/button';
import {Send} from 'lucide-react';

//Contact must be a form component

export default function Contact() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Contact</h1>
            <div className='border-1 border-gray-300 p-6 rounded-xl'>
                <p className='mb-4 font-bold'>Send Message</p>
                <div id="contact-fields">
                    <div className='text-sm font-light'>
                        <div className='flex gap-4 mb-4'>
                            <div className="flex flex-col grow-1">
                                <label htmlFor="name">Name</label>
                                <Input type="text" id="name" name="name" placeholder="Your name"
                                className='bg-gray-100 border-0'/>
                            </div>
                            <div className="flex flex-col grow-1">
                                <label htmlFor="email">Email</label>
                                <Input type="text" id="email" name="email" placeholder="Your email@example.com"
                                className='bg-gray-100 border-0'/>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className="flex flex-col">
                                <label htmlFor="subject">Subject</label>
                                <Input type="text" id="subject" name="subject" placeholder="Let's collaborate on..."
                                className='bg-gray-100 border-0'/>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Your message" className='border-gray-300 rounded-md p-2 resize-none h-32 bg-gray-100 border-0'></textarea>
                            </div>
                            <div className="flex justify-end mt-4">
                                <Button className='mt-2 grow-1'><Send/>Send Message</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}