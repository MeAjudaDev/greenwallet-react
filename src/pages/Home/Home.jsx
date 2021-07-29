import { useToast } from "../../components/Toast/ToastProvider";

export default function Home(props) {
    const { toast } = useToast();

    return (
        <div className="App">
            <button onClick={() => toast("Meu toast")}>Show toast</button>
        </div>
    );
}
