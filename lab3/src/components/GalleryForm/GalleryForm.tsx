import React, { useState } from 'react';
import InputControl from '../InputControl/InputControl';
import SelectControl from '../SelectControl/SelectControl';
import { petTypeOptions } from '../../data/petTypes';
import TextAreaControl from '../TextareaControl/TextareaControl';
import ToggleControl from '../ToggleControl/ToggleControl';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

export type PetData = {
    name: string;
    type: string;
    age: string;
    description: string;
    isVaccinated: boolean;
};

type GalleryFormProps = {
    onAddPet: (petData: PetData) => void;
};

export default function GalleryForm({ onAddPet }: GalleryFormProps) {
    const [formData, setFormData] = useState<PetData>({
        name: '',
        type: '',
        age: '',
        description: '',
        isVaccinated: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            onAddPet(formData);

            setIsSubmitting(false);
            handleClear();
        }, 1000);
    };

    const handleClear = () => {
        setFormData({
            name: '',
            type: '',
            age: '',
            description: '',
            isVaccinated: false,
        });
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                Додати улюбленця в галерею
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <InputControl
                        label="Ім'я улюбленця"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Наприклад: Барсік"
                        isRequired={true}
                        showClearButton={true}
                        onClear={() => setFormData(prev => ({ ...prev, name: '' }))}
                    />

                    <SelectControl
                        label="Вид тваринки"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        options={petTypeOptions}
                        placeholder="Оберіть тип"
                        isRequired={true}
                    />
                </div>

                <InputControl
                    label="Вік (років/місяців)"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Наприклад: 2 роки"
                />

                <TextAreaControl
                    label="Опис та характер"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Розкажіть про вашого улюбленця..."
                    rows={4}
                    hint="Максимум 500 символів"
                />

                <div className="py-2 border-t border-b border-gray-100 dark:border-gray-700 mt-2">
                    <ToggleControl
                        label="Має всі необхідні щеплення"
                        description="Підтвердіть, якщо тваринка вакцинована та має паспорт."
                        name="isVaccinated"
                        checked={formData.isVaccinated}
                        onChange={handleToggleChange}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <ButtonComponent
                        variant="secondary"
                        onClick={handleClear}
                        fullWidth={true}
                        disabled={isSubmitting}
                    >
                        Очистити
                    </ButtonComponent>

                    <ButtonComponent
                        type="submit"
                        variant="primary"
                        fullWidth={true}
                        isLoading={isSubmitting}
                    >
                        Додати в галерею
                    </ButtonComponent>
                </div>
            </form>
        </div>
    );
}