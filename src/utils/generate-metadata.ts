import { Metadata } from "next";

export const generateMetadata = ({

    
    title = `${process.env.NEXT_PUBLIC_APP_NAME} - Your Personal Mental Health Assistant`,
    description = `${process.env.NEXT_PUBLIC_APP_NAME}   is your personal health coach, using smart technology to deliver customized wellness tips and mental health guidance. Get insights tailored to your needs and feel supported every step of the way..`,
    image = "/images/thumbnail.png",
    icons = [
        {
            rel: "icon",
            sizes: "512x512",
            url: "/expressions/good.png",
             
        },
        {
            rel: "manifest",
            sizes: "512x512",
            url: "/expressions/good.png",
        },
    ],
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: {
        rel: string;
        sizes: string;
        url: string;
    }[];
    noIndex?: boolean;
} = {}): Metadata => ({
    title: title,
    description: description,
    icons: icons,
    openGraph: {
        title,
        description,
        ...(image && { images: [{ url: image }] }),
    },
});
