import { defineStore } from 'pinia'
import InpowerLogo from '@/assets/images/inpower-logo.png';
import NeverestLogo from '@/assets/images/neverest-logo.png';
import ReloadLogo from '@/assets/images/reload-logo.png';

export const useInfosStore = defineStore('infos', () => {

    const teams = [
        { 'name': 'Valorant', 'link': 'valorant', 'image': 'https://cdn.icon-icons.com/icons2/3660/PNG/512/valorant_logo_play_riot_games_icon_228477.png' },
        { 'name': 'Valorant Academy', 'link': 'valorant-academy', 'image': 'https://cdn.icon-icons.com/icons2/3660/PNG/512/valorant_logo_play_riot_games_icon_228477.png' },
        { 'name': 'Rainbow Six Siege', 'link': 'r6siege', 'image': 'https://image.api.playstation.com/cdn/EP0001/CUSA01788_00/tCPL6bpXl4FhvK4mr19Rh5qJu4QJrfTK.png?w=440&thumb=false' },
    ]

    const lines = [
        {
            game: "Valorant",
            link: "valorant",
            players: [
                {
                    name: "Renan Siduoski",
                    nick: "Siduzord",
                    image: "https://static.valorantzone.gg/news/2024/02/23143740/siduzord-stellae-vcb-2024.png"
                },
                {
                    name: "Victor Junqueira",
                    nick: "bld",
                    image: "https://pbs.twimg.com/media/GLIp4s3WIAA3-0j.jpg"
                },
                {
                    name: "Nicholas La Torre",
                    nick: "nicksz",
                    image: "https://static.valorantzone.gg/news/2024/03/06160823/nicksz-stellae-vcb-2024.png"
                },
                {
                    name: "Palla",
                    nick: "Palla",
                    image: "https://pbs.twimg.com/profile_images/1761864973511258112/GWYEcq93_400x400.jpg"
                },
                {
                    name: "Matheus da Silva Fontella",
                    nick: "shelbyN",
                    image: "https://pbs.twimg.com/media/GK9hEZbWEAIi0yP?format=jpg&name=large"
                }
            ],
            sponsor: [
                {
                    'name': 'Neverest',
                    'logo': NeverestLogo,
                    'link': 'https://neverest.gg/'
                },
                {
                    'name': 'Inpower',
                    'logo': InpowerLogo,
                    'link': 'https://neverest.gg/'
                },
                {
                    'name': 'Reload',
                    'logo': ReloadLogo,
                    'link': 'https://neverest.gg/'
                }

            ]
        },
        {
            game: "Rainbow Six Siege",
            link: "r6siege",
            players: [
                {
                    name: "Jogador6",
                    nick: "Nick6",
                    image: "link_da_image6.jpg"
                },
                {
                    name: "Jogador7",
                    nick: "Nick7",
                    image: "link_da_image7.jpg"
                },
                {
                    name: "Jogador8",
                    nick: "Nick8",
                    image: "link_da_image8.jpg"
                },
                {
                    name: "Jogador9",
                    nick: "Nick9",
                    image: "link_da_image9.jpg"
                },
                {
                    name: "Jogador10",
                    nick: "Nick10",
                    image: "link_da_image10.jpg"
                }
            ]
        }
    ];

    const sponsors = [
        {
            'name': 'Neverest',
            'logo': NeverestLogo,
            'link': 'https://neverest.gg/'
        },
        {
            'name': 'Inpower',
            'logo': InpowerLogo,
            'link': 'https://www.inpower.com.br/'
        },
        {
            'name': 'Reload',
            'logo': ReloadLogo,
            'link': ''
        }

    ]

    function chooseTeam(team: any) {
        return lines.filter(line => line.link === team);
    }

    return {
        teams,
        lines,
        sponsors,

        chooseTeam
    }
})