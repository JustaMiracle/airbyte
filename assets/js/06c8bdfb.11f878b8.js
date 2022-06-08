"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9603],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},86025:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={},s="A Beginner's Guide to the AirbyteCatalog",p={unversionedId:"understanding-airbyte/beginners-guide-to-catalog",id:"understanding-airbyte/beginners-guide-to-catalog",title:"A Beginner's Guide to the AirbyteCatalog",description:"Overview",source:"@site/../docs/understanding-airbyte/beginners-guide-to-catalog.md",sourceDirName:"understanding-airbyte",slug:"/understanding-airbyte/beginners-guide-to-catalog",permalink:"/understanding-airbyte/beginners-guide-to-catalog",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/understanding-airbyte/beginners-guide-to-catalog.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Docusaurus / Docs",permalink:"/docusaurus/"},next:{title:"AirbyteCatalog Reference",permalink:"/understanding-airbyte/catalog"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Contents",id:"contents",level:2},{value:"Database Example",id:"database-example",level:2},{value:"AirbyteCatalog",id:"airbytecatalog",level:3},{value:"ConfiguredAirbyteCatalog",id:"configuredairbytecatalog",level:3},{value:"Summary of the Postgres Example",id:"summary-of-the-postgres-example",level:3},{value:"API Examples",id:"api-examples",level:2},{value:"Static Streams Example",id:"static-streams-example",level:3},{value:"AirbyteCatalog",id:"airbytecatalog-1",level:4},{value:"ConfiguredAirbyteCatalog",id:"configuredairbytecatalog-1",level:4},{value:"Dynamic Streams Example",id:"dynamic-streams-example",level:2},{value:"AirbyteCatalog",id:"airbytecatalog-2",level:4},{value:"Nested Schema Example",id:"nested-schema-example",level:2}],c={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"a-beginners-guide-to-the-airbytecatalog"},"A Beginner's Guide to the AirbyteCatalog"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The goal of this article is to make the ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," approachable to someone contributing to Airbyte for the first time. If you are looking to get deeper into the details of the catalog, you can read our technical specification on it ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/catalog"},"here"),"."),(0,i.kt)("p",null,"The goal of the ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," is to describe ",(0,i.kt)("em",{parentName:"p"},"what")," data is available in a source. The goal of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfiguredAirbyteCatalog")," is to, based on an ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog"),", specify ",(0,i.kt)("em",{parentName:"p"},"how")," data from the source is replicated."),(0,i.kt)("h2",{id:"contents"},"Contents"),(0,i.kt)("p",null,"This article will illustrate how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," via a series of examples. We recommend reading the ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/beginners-guide-to-catalog#Database-Example"},"Database Example")," first. The other examples, will refer to knowledge described in that section. After that, jump around to whichever example is most pertinent to your inquiry."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/understanding-airbyte/beginners-guide-to-catalog#Database-Example"},"Postgres Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/understanding-airbyte/beginners-guide-to-catalog#API-Examples"},"API Example"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/understanding-airbyte/beginners-guide-to-catalog#Static-Streams-Example"},"Static Streams Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/understanding-airbyte/beginners-guide-to-catalog#Dynamic-Streams-Example"},"Dynamic Streams Example")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/understanding-airbyte/beginners-guide-to-catalog#Nested-Schema-Example"},"Nested Schema Example"))),(0,i.kt)("p",null,"In order to understand in depth how to configure incremental data replication, head over to the ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/connections/incremental-append"},"incremental replication docs"),"."),(0,i.kt)("h2",{id:"database-example"},"Database Example"),(0,i.kt)("p",null,"Let's jump into an example using a relational database. We will assume we have a database with the following schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE "airlines" (\n    "id"   INTEGER,\n    "name" VARCHAR\n);\n\nCREATE TABLE "pilots" (\n    "id"   INTEGER,\n    "airline_id" INTEGER,\n    "name" VARCHAR\n);\n')),(0,i.kt)("h3",{id:"airbytecatalog"},"AirbyteCatalog"),(0,i.kt)("p",null,"We would represent this data in a catalog as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "streams": [\n    {\n      "name": "airlines",\n      "supported_sync_modes": [\n        "full_refresh",\n        "incremental"\n      ],\n      "source_defined_cursor": false,\n      "json_schema": {\n        "type": "object",\n        "properties": {\n          "id": {\n            "type": "number"\n          },\n          "name": {\n            "type": "string"\n          }\n        }\n      }\n    },\n    {\n      "name": "pilots",\n      "supported_sync_modes": [\n        "full_refresh",\n        "incremental"\n      ],\n      "source_defined_cursor": false,\n      "json_schema": {\n        "type": "object",\n        "properties": {\n          "id": {\n            "type": "number"\n          },\n          "airline_id": {\n            "type": "number"\n          },\n          "name": {\n            "type": "string"\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"The catalog is structured as a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteStream"),'. In the case of a database a "stream" is analogous to a table. ',"(","For APIs the mapping can be a more creative; we will discuss it later in ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/beginners-guide-to-catalog#API-Examples"},"API Examples"),")"),(0,i.kt)("p",null,"Let's walk through what each field in a stream means."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," - The name of the stream."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"supported_sync_modes")," - This field lists the type of data replication that this source supports. The possible values in this array include ",(0,i.kt)("inlineCode",{parentName:"li"},"FULL_REFRESH")," ","(",(0,i.kt)("a",{parentName:"li",href:"/understanding-airbyte/connections/full-refresh-overwrite"},"docs"),")"," and ",(0,i.kt)("inlineCode",{parentName:"li"},"INCREMENTAL")," ","(",(0,i.kt)("a",{parentName:"li",href:"/understanding-airbyte/connections/incremental-append"},"docs"),")","."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source_defined_cursor")," - If the stream supports ",(0,i.kt)("inlineCode",{parentName:"li"},"INCREMENTAL")," replication, then this field signals whether the source can figure out how to detect new records on its own or not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"json_schema")," - This field is a ",(0,i.kt)("a",{parentName:"li",href:"https://json-schema.org/understanding-json-schema"},"JsonSchema")," object that describes the structure of the data. Notice that each key in the ",(0,i.kt)("inlineCode",{parentName:"li"},"properties")," object corresponds to a column name in our database table.")),(0,i.kt)("p",null,"Now we understand ",(0,i.kt)("em",{parentName:"p"},"what")," data is available from this source. Next we will configure ",(0,i.kt)("em",{parentName:"p"},"how")," we want to replicate that data."),(0,i.kt)("h3",{id:"configuredairbytecatalog"},"ConfiguredAirbyteCatalog"),(0,i.kt)("p",null,"Let's say that we do not care about replicating the pilot data at all. We do want to replicate the airlines data as a ",(0,i.kt)("inlineCode",{parentName:"p"},"FULL_REFRESH"),". Here's what our ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfiguredAirbyteCatalog")," would look like."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "streams": [\n    {\n      "sync_mode": "FULL_REFRESH",\n      "stream": {\n        "name": "airlines",\n        "supported_sync_modes": [\n          "full_refresh",\n          "incremental"\n        ],\n        "source_defined_cursor": false,\n        "json_schema": {\n          "type": "object",\n          "properties": {\n            "id": {\n              "type": "number"\n            },\n            "name": {\n              "type": "string"\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Just as with the ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfiguredAirbyteCatalog")," contains a list. This time it is a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfiguredAirbyteStream")," ","(","instead of just ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteStream"),")","."),(0,i.kt)("p",null,"Let's walk through each field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfiguredAirbyteStream"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sync_mode")," - This field must be one of the values that was in ",(0,i.kt)("inlineCode",{parentName:"li"},"supported_sync_modes")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"AirbyteStream")," - Configures which sync mode will be used when data is replicated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stream")," - Hopefully this one looks familiar! This field contains an ",(0,i.kt)("inlineCode",{parentName:"li"},"AirbyteStream"),". It should be ",(0,i.kt)("em",{parentName:"li"},"identical")," to the one we saw in the ",(0,i.kt)("inlineCode",{parentName:"li"},"AirbyteCatalog"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cursor_field")," - When ",(0,i.kt)("inlineCode",{parentName:"li"},"sync_mode")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"INCREMENTAL")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"source_defined_cursor = false"),", this field configures which field in the stream will be used to determine if a record should be replicated or not. Read more about this concept in our ",(0,i.kt)("a",{parentName:"li",href:"/understanding-airbyte/connections/incremental-append"},"documentation of incremental replication"),".")),(0,i.kt)("h3",{id:"summary-of-the-postgres-example"},"Summary of the Postgres Example"),(0,i.kt)("p",null,"When thinking about ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfiguredAirbyteCatalog"),", remember that the ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," describes ",(0,i.kt)("em",{parentName:"p"},"what")," data is present in the source ","(","and metadata around what replication configuration it can support",")",". It is output by the ",(0,i.kt)("inlineCode",{parentName:"p"},"discover")," method of source. It should be treated as an immutable object; if you are ever manually editing a catalog outside of a source, you've gone off the rails. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfiguredAirbyteCatalog")," is a mutable configuration object that specifies, for each ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteStream"),", ",(0,i.kt)("em",{parentName:"p"},"how")," ","(","and if",")"," it should be replicated. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfiguredAirbyteCatalog")," does this by wrapping each ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteStream")," in an ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfiguredAirbyteStream"),"."),(0,i.kt)("h2",{id:"api-examples"},"API Examples"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," offers the flexibility in how to model the data for an API. In the next two examples, we will model data from the same API--a stock ticker--in two different ways. In the first, the source will return a single stream called ",(0,i.kt)("inlineCode",{parentName:"p"},"ticker"),", and in the second, the source with return a stream for each stock symbol it is configured to retrieve data for. Each stream's name will be a stock symbol."),(0,i.kt)("h3",{id:"static-streams-example"},"Static Streams Example"),(0,i.kt)("p",null,"Let's imagine we want to create a basic Stock Ticker source. The goal of this source is to take in a single stock symbol and return a single stream. We will call the stream ",(0,i.kt)("inlineCode",{parentName:"p"},"ticker")," and will contain the closing price of the stock. We will assume that you already have a rough understanding of the ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfiguredAirbyteCatalog")," from the ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/beginners-guide-to-catalog#Database-Example"},"previous database example"),"."),(0,i.kt)("h4",{id:"airbytecatalog-1"},"AirbyteCatalog"),(0,i.kt)("p",null,"Here is what the ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," might look like."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "streams": [\n    {\n      "name": "ticker",\n      "supported_sync_modes": [\n        "full_refresh",\n        "incremental"\n      ],\n      "source_defined_cursor": false,\n      "json_schema": {\n        "type": "object",\n        "properties": {\n          "symbol": {\n            "type": "string"\n          },\n          "price": {\n            "type": "number"\n          },\n          "date": {\n            "type": "string"\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"This catalog looks pretty similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," that we created for the ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/beginners-guide-to-catalog#Database-Example"},"Database Example"),". For the data we've picked here, you can think about ",(0,i.kt)("inlineCode",{parentName:"p"},"ticker")," as a table and then each field it returns in a record as a column, so it makes sense that these look pretty similar."),(0,i.kt)("h4",{id:"configuredairbytecatalog-1"},"ConfiguredAirbyteCatalog"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfiguredAirbyteCatalog")," follows the same rules as we described in the ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/beginners-guide-to-catalog#Database-Example"},"Database Example"),". It just wraps the ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," described above."),(0,i.kt)("h2",{id:"dynamic-streams-example"},"Dynamic Streams Example"),(0,i.kt)("p",null,"Now let's build a stock ticker source that handles returning ticker data for ",(0,i.kt)("em",{parentName:"p"},"multiple")," stocks. The name of each stream will be the stock symbol that it represents."),(0,i.kt)("h4",{id:"airbytecatalog-2"},"AirbyteCatalog"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "streams": [\n    {\n      "name": "TSLA",\n      "supported_sync_modes": [\n        "full_refresh",\n        "incremental"\n      ],\n      "source_defined_cursor": false,\n      "json_schema": {\n        "type": "object",\n        "properties": {\n          "symbol": {\n            "type": "string"\n          },\n          "price": {\n            "type": "number"\n          },\n          "date": {\n            "type": "string"\n          }\n        }\n      }\n    },\n    {\n      "name": "FB",\n      "supported_sync_modes": [\n        "full_refresh",\n        "incremental"\n      ],\n      "source_defined_cursor": false,\n      "json_schema": {\n        "type": "object",\n        "properties": {\n          "symbol": {\n            "type": "string"\n          },\n          "price": {\n            "type": "number"\n          },\n          "date": {\n            "type": "string"\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"This example provides another way of thinking about exposing data in a source. As a developer building a source, you can model the ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," for a source however makes most sense to the use case you are trying to fulfill."),(0,i.kt)("h2",{id:"nested-schema-example"},"Nested Schema Example"),(0,i.kt)("p",null,'Often, a data source contains "nested" data. In other words this is data where each record contains other objects nested inside it. Cases like this cannot be easily modeled just as tables / columns. This is why Airbyte uses JsonSchema to model the schema of its streams.'),(0,i.kt)("p",null,"Let's imagine we are modeling a flight object. A flight object might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "airline": "alaska",\n  "origin": {\n    "airport_code": "SFO",\n    "terminal": "2",\n    "gate": "G23"\n  },\n  "destination": {\n    "airport_code": "JFK",\n    "terminal": "7",\n    "gate": "1"\n  }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "streams": [\n    {\n      "name": "flights",\n      "supported_sync_modes": [\n        "full_refresh"\n      ],\n      "source_defined_cursor": false,\n      "json_schema": {\n        "type": "object",\n        "properties": {\n          "airline": {\n            "type": "string"\n          },\n          "origin": {\n            "type": "object",\n            "properties": {\n              "airport_code": {\n                "type": "string"\n              },\n              "terminal": {\n                "type": "string"\n              },\n              "gate": {\n                "type": "string"\n              }\n            }\n          },\n          "destination": {\n            "type": "object",\n            "properties": {\n              "airport_code": {\n                "type": "string"\n              },\n              "terminal": {\n                "type": "string"\n              },\n              "gate": {\n                "type": "string"\n              }\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Because Airbyte uses JsonSchema to model the schema of streams, it is able to handle arbitrary nesting of data in a way that a table / column based model cannot."))}u.isMDXComponent=!0}}]);