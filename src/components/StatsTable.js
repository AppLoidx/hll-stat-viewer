import {Table} from "antd";

const StatsTable = ({dataSource}) => {
    const columns = [
        {
            title: 'Игрок',
            dataIndex: 'player',
            key: 'player',
        },
        {
            title: 'Убийства',
            dataIndex: 'kills',
            key: 'kills',
            sorter: (a, b) => b.kills - a.kills
        },
        {
            title: 'Смертей',
            dataIndex: 'deaths',
            key: 'deaths',
            sorter: (a, b) => b.deaths - a.deaths
        },
        {
            title: 'Убийств в минуту',
            dataIndex: 'kills_per_minute',
            key: 'kills_per_minute',
            sorter: (a, b) => b.kills_per_minute - a.kills_per_minute
        },
        {
            title: 'Кил-стрик (наиболь.)',
            dataIndex: 'kills_streak',
            key: 'kills_streak',
            sorter: (a, b) => b.kills_streak - a.kills_streak
        },
    ];

    return <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 102}}/>;
}

export default StatsTable;