import * as React from 'react';

export function CountryListItem(props: any) {
    return (
        <tr key={props.name}>
            <td className="align-middle">{props.name}</td>
            <td className="align-middle">{props.population}</td>
            <td className="align-middle">{props.area}</td>
            <td className="align-middle">{props.capital}</td>
            <td><img src={props.flag}/></td>
        </tr>
    );
}