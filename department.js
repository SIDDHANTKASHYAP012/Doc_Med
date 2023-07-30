function showDepartmentInfo(departmentName) {
    const departmentInfo = document.getElementById('departmentInfo');
    departmentInfo.style.display = 'block';

    // Clear previous department info
    departmentInfo.innerHTML = '';

    // Add new department info
    const info = getDepartmentInfo(departmentName);
    departmentInfo.innerHTML = `<h3>${departmentName}</h3>
                                <p>${info}</p>`;
}

function getDepartmentInfo(departmentName) {
    // Replace this with actual information for each department
    // You can fetch this data from a database or another source in a real application
    switch (departmentName) {
        case 'Cardiology':
            return 'Cardiology department deals with heart-related issues.';
        case 'Neurology':
            return 'Neurology department deals with disorders of the nervous system.';
        case 'Orthopedics':
            return 'Orthopedics department deals with musculoskeletal issues.';

            case 'Gastroenterology':
                return 'Specializes in the digestive system and treats conditions related to the stomach, intestines, liver, and pancreas';

                case 'Obstetrics and Gynecology':
            return 'Provides care for womens health, including pregnancy, childbirth, and reproductive health.';

            case 'Pediatrics':
            return 'Focuses on the medical care of infants, children, and adolescents.';

            case 'Obstetrics and Gynecology':
            return 'Provides care for womens health, including pregnancy, childbirth, and reproductive health.';

            case 'Ophthalmology':
            return 'Specializes in the diagnosis and treatment of eye disorders and diseases';

            case 'Dermatology':
            return 'Deals with skin-related issues and diseases.';

            case 'Urology':
            return 'Focuses on disorders of the urinary system and male reproductive organs.';

            case 'Oncology ':
            return 'Specializes in the diagnosis and treatment of cancer.';
        default:
            return 'Information not available.';
    }
}
