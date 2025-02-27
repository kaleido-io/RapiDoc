import { html } from 'lit-element';

export default html`
<style>
.m-table {
  border-spacing: 0;  
  border-collapse: separate;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  margin: 0;
  max-width: 100%;
}
.m-table tr:first-child td,
.m-table tr:first-child th {
    border-top: 0 none;
}
.m-table td, 
.m-table th{
  font-size: var(--font-size-small);
  line-height: 16px;
  padding: 4px 5px 4px;
  text-align: left;
  vertical-align: top;
}

.m-table th {
  color: var(--fg3);
  font-size: var(--font-size-small);
  line-height:30px;
  font-weight: 600;
  letter-spacing: normal;
  background-color: var(--bg3);
  vertical-align: bottom;
  border-bottom: 1px solid var(--border-color);
}

.m-table > tbody >tr > td,
.m-table > tr > td{
  border-top: 1px solid var(--light-border-color);
  text-overflow: ellipsis;
  overflow: hidden;
}
.table-title{
  font-size:var(--font-size-small);
  font-weight:bold;
  vertical-align: middle;
  margin: 12px 0 4px 0;
}

</style>`;
