import React from 'react';
import classNames from 'classnames/bind';
import TableHeader from './TableHeader'

class Table extends React.Component {

  render() {
    const tableClasses = classNames(
      'table',
      {
        'single-row': this.props.singleRow
      }
    )
    return (
      <div className={tableClasses}>
        <table>
          <tbody>
            <tr>
              <TableHeader name='Name' />
              <TableHeader name='Breed' />
              <TableHeader name='Fav' />
              <TableHeader name='Alpha' />
              <TableHeader name='Beta' />
            </tr>
            <tr>
              <td>Mittens</td>
              <td>Persian</td>
              <td>Likes cat nip</td>
              <td>alpha</td>
              <td>beta</td>
            </tr>
            <tr>
              <td>Meowsers</td>
              <td>Shorthair</td>
              <td>Enjoys knocking over items Enjoys knocking over items Enjoys knocking over items</td>
              <td>alpha</td>
              <td>beta</td>
            </tr>
            <tr>
              <td>Mr. Biglesworth</td>
              <td>Munchkin</td>
              <td>Naps frequently</td>
              <td>alpha</td>
              <td>beta</td>
            </tr>
            <tr>
              <td>Mr. Biglesworth</td>
              <td>Munchkin</td>
              <td>Naps frequently</td>
              <td>alpha</td>
              <td>beta</td>
            </tr>
            <tr>
              <td>Mr. Biglesworth</td>
              <td>Munchkin</td>
              <td>Naps frequently</td>
              <td>alpha</td>
              <td>beta</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
