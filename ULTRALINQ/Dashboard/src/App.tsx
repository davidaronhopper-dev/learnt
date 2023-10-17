import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Subtitle, Button, Icon, DonutChart, Card, TextInput, Text, Metric, Flex, ProgressBar, AreaChart, Title, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge, AccordionList, Accordion, AccordionHeader, AccordionBody, Divider } from "@tremor/react";
import { SearchIcon } from "@heroicons/react/solid";
import MonthlyData from './assets/UltralinqSeptember.json';

function SearchBox({onChange, value}) {
  return <TextInput icon={SearchIcon} placeholder="Enter Company ID" onChange={onChange} value={value}/>
}

function CompanyListing({searchedData}) {
  return (
      <>

      {searchedData.map((item, key) => {
        const billable = item.billable;
        const deleted = item.deleted;
        const total = billable + deleted;
        return (
          <Accordion key={key}>
                    <AccordionHeader>
                        <table className="dataBody">
                  <TableRow>
                      <TableCell className="ID">{item.company_id}</TableCell>
                      <TableCell className="Name">
                        <Text>{item.company_name}</Text>
                      </TableCell>
                      <TableCell className="Billable">
                        <Text>{item.billable}</Text>
                      </TableCell>
                  </TableRow>
                        </table>
                    </AccordionHeader>

              <AccordionBody className="listBody">
                <Card>
                  <Flex justifyContent="start">
                    <div className="breakdown_graphic">
                      <Title>Study Breakdown</Title>
                      <DonutChart
                          className="mt-6"
                          data={item.studies}
                          category="data"
                          index="name"
                          variant="pie"
                          //valueFormatter={valueFormatter}
                          colors={["rose", "cyan", "amber"]}
                      />
                    </div>
                    <div className="breakdown_text">
                      <Text>Uploads</Text>
                      <Metric>{total}</Metric><br/>
                      <Text>Deleted</Text>
                      <Metric>{item.deleted}</Metric>
                      <br/>
                      <Subtitle>Total Billable</Subtitle>
                      <Metric>{item.billable}</Metric>
                    </div>
                    <div className="breakdown_graphic">
                      <Title>Study Type</Title>
                      <DonutChart
                          className="mt-6"
                          data={item.exam_type}
                          category="data"
                          index="name"
                          variant="pie"
                          //valueFormatter={valueFormatter}
                          colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
                      />
                    </div>
                    <div className="breakdown_graphic">
                      <Title>Status</Title>
                      <DonutChart
                          className="mt-6"
                          data={item.status}
                          category="data"
                          index="name"
                          variant="pie"
                          //valueFormatter={valueFormatter}
                          colors={["rose", "cyan", "amber"]}
                      />
                    </div>

                  </Flex>
                  <Flex justifyContent="end" className="space-x-2 border-t pt-4 mt-8">
                    <Button size="xs" variant="secondary">
                      Download CSV
                    </Button>

                    <Button size="xs" variant="primary">
                      View Study Data
                    </Button>
                  </Flex>
                </Card>
              </AccordionBody>
          </Accordion>

      )})}
      </>
  )
}

function App() {

  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search') || '');
  function searchSomething(e) {
    setSearchTerm(e.target.value);

  }

  useEffect(()=>{
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const searchedData = MonthlyData.filter((item) => {
    const company_id = item.company_id.toString();
    return company_id.includes(searchTerm);
  })


  return (

    <>
      <Card>
      <Title>Global Study Report 2023</Title>

        <Title>Search By Company ID</Title>
        <SearchBox onChange={searchSomething} value={searchTerm}></SearchBox>
          <AccordionList>
            <Table className="dataHeader">
            <TableHead>
              <TableRow>
                <TableHeaderCell className="ID">Company ID</TableHeaderCell>
                <TableHeaderCell className="Name">Company Name</TableHeaderCell>
                <TableHeaderCell className="Billable">Billable Studies</TableHeaderCell>
              </TableRow>
            </TableHead>
            </Table>
              <CompanyListing searchedData={searchedData}/>
          </AccordionList>
      </Card>
    </>
  )
}



export default App
