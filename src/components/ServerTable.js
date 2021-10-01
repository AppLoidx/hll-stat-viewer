import {Table} from "antd";

function format_time(s) {
    const dtFormat = new Intl.DateTimeFormat('en-GB', {
        timeStyle: 'medium',
        timeZone: 'UTC'
    });

    return dtFormat.format(new Date(s * 1e3));
}

function time_diff_from_now(date) {
    return new Date().getTime() / 1000 - date;
}

const ServerTable = ({serversInfo}) => {

    const columns = [
        {
            title: "Сервер",
            dataIndex: "name",
            key: "server"
        },
        {
            title: "Текущая карта",
            key: "current_map",
            render: (text, record) => <div>{record.current_map.human_name}</div>
        },
        {
            title: "Время",
            key: "current_map",
            render: (text, record) => <div>{format_time(time_diff_from_now(record.current_map.start))}</div>
        }, {
            title: "Количество игроков",
            dataIndex: "nb_players",
            key: "nb_players"
        }, {
            title: "Следующая карта",
            dataIndex: "next_map",
            key: "next_map"
        }
    ]

    return <Table columns={columns} dataSource={serversInfo} pagination={false}/>
}

export default ServerTable;