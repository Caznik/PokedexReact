import './stats-graph.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import highchartsMore from 'highcharts/highcharts-more';

// Initialize the modules
highchartsAccessibility(Highcharts);
highchartsMore(Highcharts);

function StatsGraph(props: any) {

    const { stats } = props;

    // Format the data for Highcharts
    const categories = stats.map((stat: any) => stat.stat.name.toUpperCase());
    const data = stats.map((stat: any) => stat.base_stat);

    // Highcharts configuration object
    const options = {
        chart: {
            polar: true,
            type: 'line'
        },
        title: {
            text: 'Pokémon Stats'
        },
        xAxis: {
            categories: categories,
            tickmarkPlacement: 'on',
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            min: 0
        },
        series: [{
            name: 'Stats',
            data: data,
            pointPlacement: 'on'
        }]
    };

    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    );
}

export default StatsGraph;