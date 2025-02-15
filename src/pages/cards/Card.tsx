
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    IconBrandDiscord,
    IconBrandDocker,
    IconBrandFigma,
    IconBrandGithub,
    IconBrandGitlab,
    IconBrandGmail,
    IconBrandMedium,
    IconBrandNotion,
    IconBrandSkype,
    IconBrandSlack,
    IconBrandStripe,
    IconBrandTelegram,
    IconBrandTrello,
    IconBrandWhatsapp,
    IconBrandZoom,
} from '@tabler/icons-react'

export const datas = [
    {
        name: 'Telegram',
        logo: <IconBrandTelegram />,
        connected: false,
        desc: 'Connect with Telegram for real-time communication.',
    },
    {
        name: 'Notion',
        logo: <IconBrandNotion />,
        connected: true,
        desc: 'Effortlessly sync Notion pages for seamless collaboration.',
    },
    {
        name: 'Figma',
        logo: <IconBrandFigma />,
        connected: true,
        desc: 'View and collaborate on Figma designs in one place.',
    },
    {
        name: 'Trello',
        logo: <IconBrandTrello />,
        connected: false,
        desc: 'Sync Trello cards for streamlined project management.',
    },
    {
        name: 'Slack',
        logo: <IconBrandSlack />,
        connected: false,
        desc: 'Integrate Slack for efficient team communication',
    },
    {
        name: 'Zoom',
        logo: <IconBrandZoom />,
        connected: true,
        desc: 'Host Zoom meetings directly from the dashboard.',
    },
    {
        name: 'Stripe',
        logo: <IconBrandStripe />,
        connected: false,
        desc: 'Easily manage Stripe transactions and payments.',
    },
    {
        name: 'Gmail',
        logo: <IconBrandGmail />,
        connected: true,
        desc: 'Access and manage Gmail messages effortlessly.',
    },
    {
        name: 'Medium',
        logo: <IconBrandMedium />,
        connected: false,
        desc: 'Explore and share Medium stories on your dashboard.',
    },
    {
        name: 'Skype',
        logo: <IconBrandSkype />,
        connected: false,
        desc: 'Connect with Skype contacts seamlessly.',
    },
    {
        name: 'Docker',
        logo: <IconBrandDocker />,
        connected: false,
        desc: 'Effortlessly manage Docker containers on your dashboard.',
    },
    {
        name: 'GitHub',
        logo: <IconBrandGithub />,
        connected: false,
        desc: 'Streamline code management with GitHub integration.',
    },
    {
        name: 'GitLab',
        logo: <IconBrandGitlab />,
        connected: false,
        desc: 'Efficiently manage code projects with GitLab integration.',
    },
    {
        name: 'Discord',
        logo: <IconBrandDiscord />,
        connected: false,
        desc: 'Connect with Discord for seamless team communication.',
    },
    {
        name: 'WhatsApp',
        logo: <IconBrandWhatsapp />,
        connected: false,
        desc: 'Easily integrate WhatsApp for direct messaging.',
    },
]


const Cards = () => {
    return (
        <div className="lg:ms-80 md:ms-80 mx-10">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {datas.map((item, index) => (
                    <Card key={index} className="w-60s p-4">
                        <CardHeader className="flex items-center gap-4">
                            <div className="text-3xl">{item.logo}</div>
                            <div>
                                <CardTitle>{item.name}</CardTitle>
                                <CardDescription>{item.desc}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className={`text-sm ${item.connected ? "text-green-500" : "text-red-500"}`}>
                                {item.connected ? "Connected" : "Not Connected"}
                            </p>
                        </CardContent>
                        <CardFooter>
                            <button className={`px-4 py-2 rounded text-white ${item.connected ? "bg-red-500" : "bg-blue-500"}`}>
                                {item.connected ? "Disconnect" : "Connect"}
                            </button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Cards;
