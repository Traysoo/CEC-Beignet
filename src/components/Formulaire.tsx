'use client';

import { useState } from 'react';

export default function Formulaire() {

    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
    } | null>(null);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
        ) => {
        e.preventDefault();

        setError("");
        setIsLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(
            "https://formspree.io/f/maqzowwa",
            {
                method: "POST",
                body: formData,
                headers: {
                Accept: "application/json",
                },
            }
            );

            if (response.ok) {
                form.reset();

                setNotification({
                    type: "success",
                    message: "✓ Merci pour votre message. Nous reviendrons vers vous rapidement.",
                });

                setTimeout(() => {
                    setNotification(null);
                }, 4000);
            } else {
              setNotification({
                    type: "error",
                    message: "Une erreur est survenue. Veuillez réessayer.",
                });

                setTimeout(() => {
                    setNotification(null);
                }, 4000);
            }
        } catch {
            setNotification({
                type: "error",
                message: "Une erreur est survenue. Veuillez réessayer.",
            });

            setTimeout(() => {
                setNotification(null);
            }, 4000);
        }

        setIsLoading(false);
    };

    return(
        <div className="max-w-5xl mx-auto">
            <div className="bg-[#EBC8DC] rounded-[20px] p-8 md:p-10 shadow-lg">
                <form 
                onSubmit={handleSubmit} 
                className="space-y-8"
                id="contact-form">
                    

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Adresse email"
                        className="
                        w-full
                        h-14
                        rounded-[10px]
                        px-6
                        text-base md:text-[clamp(0.5rem,1.7vw,1.25rem)]
                        bg-white
                        shadow-md
                        outline-none
                        "
                        required
                    />

                    {/* Ligne 3 colonnes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <input
                        type="text"
                        name="firstname"
                        placeholder="Prénom"
                        className="
                            w-full
                            h-14
                            rounded-[10px]
                            px-6
                            text-base md:text-[clamp(0.5rem,1.7vw,1.25rem)]
                            bg-white
                            shadow-md
                            outline-none
                        "
                        required
                        />

                        <input
                        type="text"
                        placeholder="Nom de famille"
                        className="
                            w-full
                            h-14
                            rounded-[10px]
                            px-6
                            text-base md:text-[clamp(0.5rem,1.7vw,1.25rem)]
                            bg-white
                            shadow-md
                            outline-none
                        "
                        required
                        />

                        <input
                        type="text"
                        name="lastname"
                        placeholder="Entreprise"
                        className="
                            w-full
                            h-14
                            rounded-[10px]
                            px-6
                            text-base md:text-[clamp(0.5rem,1.7vw,1.25rem)]
                            bg-white
                            shadow-md
                            outline-none
                        "
                        required
                        />

                    </div>
                    {/* Message */}
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={8}
                        className="
                        w-full
                        rounded-[10px]
                        p-6
                        text-base md:text-[clamp(0.5rem,1.7vw,1.25rem)]
                        bg-white
                        shadow-md
                        outline-none
                        resize-none
                        "
                        required
                    />

                    

                    {/* Notif */}

                    {notification && (
                    <div
                        className={`
                        fixed
                        top-28
                        left-1/2
                        -translate-x-1/2
                        z-50
                        px-6
                        py-4
                        rounded-xl
                        shadow-xl
                        text-black
                        font-medium
                        transition-all
                        duration-300
                        ${
                            notification.type === "success"
                            ? "bg-white"
                            : "bg-red-600"
                        }
                        `}
                    >
                        {notification.message}
                    </div>
                    )}

                    


                </form>


            </div>

            <div className="flex justify-center mt-10">
                <button
                type="submit"
                form="contact-form"
                disabled={isLoading}
                className="
                    px-8
                    py-4
                    bg-white
                    text-black
                    font-semibold
                    shadow-lg
                    text-lg
                    hover:opacity-90
                    transition
                    duration-300
                    hover:bg-gray-200
                    disabled:opacity-50
                    cursor-pointer
                "
                >
                {isLoading ? "Envoi..." : "Envoyer"}
                </button>
            </div>

        </div>

        

        




    );
}
