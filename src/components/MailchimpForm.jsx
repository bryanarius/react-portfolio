import MailchimpSubscribe from "mailchimp-subscribe";
import { Newsletter } from "./Newsletter"

export const MailchimpForm = () => {
    const postUrl = ``

    return (
        <>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message}) =>(
                    <Newsletter
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formDate)}
                    />
                )}
            />
        </>
    )
}

