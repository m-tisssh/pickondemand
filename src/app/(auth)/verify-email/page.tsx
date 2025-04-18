import Image from "next/image"
import VerifyEmail from "@/components/VerifyEmail"

interface PageProps
 {
    searchParams: {
        [key: string]: string | string[] | undefined  // example: token=<any-token-value>
    }
}

const VerifyEmailPage = ({ searchParams}: PageProps) => {
    const token = searchParams.token
    const toEmail = searchParams.to 

    return (
        <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-20">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px">
                { token && typeof token === "string" ? (
                    <div className="grid gap-6">
                        <VerifyEmail token={token} />
                    </div>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-1">
                        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                            <Image 
                                src='/email-sent.png'
                                fill
                                alt='hippo email sent image'
                            />
                        </div>

                        <h3 className="font-semibold text-2xl">
                            Проверьте свою электронную почту
                        </h3>

                        {toEmail ? (
                            <p className="text-muted-foreground text-center">
                                Мы отправили ссылку для проверки на почту {' '}
                                <span className="font-semibold">
                                    {toEmail}
                                </span>
                                .
                            </p> 
                        ) : ( 
                            <p className="text-muted-foreground text-center">
                                Мы отправили ссылку для подтверждения на ваш адрес электронной почты.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default VerifyEmailPage