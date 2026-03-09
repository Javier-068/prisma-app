export default function ProfileCard({ user }: { user: any }) {
    return (
        <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-6 bg-gray-50 rounded-lg shadow">
                <p className="text-lg font-semibold text-gray-700">Nombre</p>
                <p className="text-gray-900">{user?.name}</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow">
                <p className="text-lg font-semibold text-gray-700">Correo</p>
                <p className="text-gray-900">{user?.email}</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow">
                <p className="text-lg font-semibold text-gray-700">Rol</p>
                <p className="text-gray-900">{user?.role}</p>
            </div>
        </div>
    );
}