import { useToast } from "../../components/Toast/ToastProvider";

export default function Home(props) {
    const { toast } = useToast();

    return (
        <div className="App">
            <button style={{ marginLeft: 8 }} onClick={() => toast("Sucesso")}>
                Sucesso
            </button>
            <button style={{ marginLeft: 8 }} onClick={() => toast("Error")}>
                Error
            </button>
            <button style={{ marginLeft: 8 }} onClick={() => toast("Info")}>
                Info
            </button>
        </div>
    );
}
