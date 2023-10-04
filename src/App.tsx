import axios from "axios";
import Select from "components/Select";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { getStorageData, setStorageData } from "./helpers/localStorage";

const RootContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-flow: column;
  margin: auto;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
`;

const Card = styled.div`
  border-radius: 12px;
  margin: 12px;
  padding: 20px;
  background: white;
  width: calc(50% - 64px);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  margin: 20px 0;
  color: #545854;
  padding-bottom: 10px;
  border-bottom: 1px solid #ff971d;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    margin: 18px 0;
  }
`;

const PageTitle = styled.div`
  margin: 128px 12px;
  text-align: center;
  color: #484848;
  border-radius: 24px;
  width: 100%;
  max-width: 680px;
  align-self: center;
  box-sizing: border-box;
  & > h1 {
    margin: 0 auto 40px;
    border-bottom: 1px solid #ff971d;
    width: max-content;
    padding: 12px;
    text-shadow: 0px 0px 6px #c8c8c8;
  }
  & > p {
    color: #42a8ff;
    font-family: "Mona Sans";
    font-weight: 100;
    font-size: 18px;
    padding: 12px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 28px;

    & > p {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 480px) {
    margin: 80px 12px;
    padding: 16px;

    & > h1 {
      font-size: 26px;
    }
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #797979;
  font-family: vazir;
  padding-bottom: 8px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const MoreSample = styled.p`
  font-weight: 100;
  margin: 0 12px;
  color: #4e4b4b;
  font-size: 20px;
  padding: 0 20px;

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

interface DataType {
  label: string;
  value: string;
}

const App = () => {
  const [optionsData, setOptionsData] = useState<DataType[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const { data }: { data: DataType[] } =
        await axios.get("src/data/data.json");
      setOptionsData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <RootContainer>
      <PageTitle>
        <h1>Select Components</h1>
        <p>This is a general demo of the component</p>
        <div>
          <Select
            selectClass="rasha-select-main"
            onChange={(val: string | string[]) =>
              setStorageData("selectData", val)
            }
            onSearch={(val: string) => console.log(val)}
            options={optionsData}
            defaultValue={getStorageData("selectData", [])}
            showSearch
            multiple
            placeholder="select or search an option"
          />
        </div>
      </PageTitle>

      <div className="sample-component">
        <MoreSample>there is more sample of this components</MoreSample>
        <Box>
          <Card>
            <Title>Single-Select</Title>
            <Description>
              In this case, you can select only one item from the list
            </Description>
            <Select
              selectClass="rasha-select-1"
              onChange={(val: string | string[]) => console.log("value: ", val)}
              onSearch={(val: string) => console.log(val)}
              options={optionsData}
              placeholder="select an option"
            />
          </Card>

          <Card>
            <Title>Multi-Select</Title>
            <Description>
              In this case, you can choose several options from the list
            </Description>
            <Select
              selectClass="rasha-select-2"
              onChange={(val: string | string[]) => console.log("value: ", val)}
              onSearch={(val: string) => console.log(val)}
              options={optionsData}
              placeholder="select an option"
              multiple={true}
            />
          </Card>
        </Box>
        <Box>
          <Card>
            <Title>Single-Select showSearch</Title>
            <Description>
              When the drop-down box opens, you can search and filter the list
              and select an option
            </Description>
            <Select
              selectClass="rasha-select-3"
              onChange={(val: string | string[]) => console.log("value: ", val)}
              onSearch={(val: string) => console.log(val)}
              options={optionsData}
              placeholder="select or search an option"
              showSearch
            />
          </Card>

          <Card>
            <Title>Multi-Select showSearch</Title>
            <Description>
              When the dropdown opens, you can search and filter the list and
              select several options
            </Description>
            <Select
              selectClass="rasha-select-4"
              onChange={(val: string | string[]) => console.log("value: ", val)}
              onSearch={(val: string) => console.log(val)}
              options={optionsData}
              placeholder="select or search an option"
              multiple
              showSearch
            />
          </Card>
        </Box>
        <Box>
          <Card>
            <Title>Single-Select defaultValue</Title>
            <Description>
              In this case, you can set a selected default value for the
              component
            </Description>
            <Select
              selectClass="rasha-select-5"
              onChange={(val: string | string[]) => console.log("value: ", val)}
              onSearch={(val: string) => console.log(val)}
              options={optionsData}
              placeholder="select or search an option"
              defaultValue={"option_2"}
              showSearch
            />
          </Card>

          <Card>
            <Title>Multi-Select defaultValue</Title>
            <Description>
              In this case, you can set a selected default value for the
              component
            </Description>
            <Select
              selectClass="rasha-select-6"
              onChange={(val: string | string[]) => console.log("value: ", val)}
              onSearch={(val: string) => console.log(val)}
              options={optionsData}
              placeholder="select or search an option"
              multiple={true}
              defaultValue={["option_1", "option_2"]}
              showSearch
            />
          </Card>
        </Box>
        <Box>
          <Card>
            <Title>Single-Select disabled</Title>
            <Description>
              In this case, the select box is disabled and it is not possible to
              open the drop down and select option
            </Description>
            <Select
              selectClass="rasha-select-7"
              onChange={(val: string | string[]) => console.log("value: ", val)}
              onSearch={(val: string) => console.log(val)}
              options={optionsData}
              placeholder="select or search an option"
              disabled
            />
          </Card>

          <Card>
            <Title>Multi-Select disabled</Title>
            <Description>
              In this case, the select box is disabled and it is not possible to
              open the drop down and select option
            </Description>
            <Select
              selectClass="rasha-select-8"
              onChange={(val: string | string[]) => console.log("value: ", val)}
              onSearch={(val: string) => console.log(val)}
              options={optionsData}
              placeholder="select or search an option"
              multiple={true}
              disabled
            />
          </Card>
        </Box>
        <Box>
          <Card>
            <Title>Single-Select disableOption</Title>
            <Description>
              In this case, you can disable the options you want so that it is
              not possible to select them
            </Description>
            <Select
              selectClass="rasha-select-9"
              onChange={(val: string | string[]) => console.log("value: ", val)}
              onSearch={(val: string) => console.log(val)}
              options={optionsData}
              placeholder="select or search an option"
              showSearch
              disableOption={(data: DataType) => data.value == "option_2"}
            />
          </Card>

          <Card>
            <Title>Multi-Select disableOption</Title>
            <Description>
              In this case, you can disable the options you want so that it is
              not possible to select them
            </Description>
            <Select
              selectClass="rasha-select-10"
              onChange={(val: string | string[]) => console.log("value: ", val)}
              onSearch={(val: string) => console.log(val)}
              options={optionsData}
              placeholder="select or search an option"
              multiple={true}
              showSearch
              disableOption={(data: DataType) =>
                data.value == "option_2" || data.value == "option_3"
              }
            />
          </Card>
        </Box>
      </div>
    </RootContainer>
  );
};

export default App;
