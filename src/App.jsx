import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import TransactionFrom from "./components/transactions/TransactionFrom";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChart from "./components/ExpenseChart";

export default function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex
      justify-center items-center">
        <div className="container mx-auto w-3/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">

            <div>

              <div>
                <h1 className="text-4xl font-bold"> Ingresos y Gastos</h1>
              </div>
              <IncomeExpenses />
              <Balance />
              <TransactionFrom />

            </div>
            <div className="flex flex-col flex-1">
              <ExpenseChart />
              <TransactionList />
            </div>

          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}
